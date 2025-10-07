import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const USER_LIKES_KEY = 'lagarttus_user_likes';

interface UserLikesData {
  [productId: string]: boolean;
}

const getUserLikesFromStorage = (): UserLikesData => {
  try {
    const stored = localStorage.getItem(USER_LIKES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const saveUserLikesToStorage = (userLikes: UserLikesData) => {
  try {
    localStorage.setItem(USER_LIKES_KEY, JSON.stringify(userLikes));
  } catch (error) {
    console.error('Failed to save user likes:', error);
  }
};

export const useLikes = (productId: string, initialLikes: number = 0) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch likes from database
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const { data, error } = await supabase
          .from('product_likes')
          .select('likes_count')
          .eq('product_id', productId)
          .maybeSingle();

        if (error) {
          console.error('Error fetching likes:', error);
          setLikes(initialLikes);
        } else {
          setLikes(data?.likes_count || initialLikes);
        }

        // Check if user has liked this product
        const userLikes = getUserLikesFromStorage();
        setIsLiked(userLikes[productId] || false);
      } catch (error) {
        console.error('Error in fetchLikes:', error);
        setLikes(initialLikes);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLikes();
  }, [productId, initialLikes]);

  const toggleLike = async () => {
    const userLikes = getUserLikesFromStorage();
    const currentUserLiked = userLikes[productId] || false;

    try {
      if (currentUserLiked) {
        // Unlike: decrease count
        const newCount = Math.max(initialLikes, likes - 1);
        
        const { error } = await supabase
          .from('product_likes')
          .upsert({
            product_id: productId,
            likes_count: newCount
          }, {
            onConflict: 'product_id'
          });

        if (error) throw error;

        userLikes[productId] = false;
        setLikes(newCount);
        setIsLiked(false);
      } else {
        // Like: increase count
        const newCount = likes + 1;
        
        const { error } = await supabase
          .from('product_likes')
          .upsert({
            product_id: productId,
            likes_count: newCount
          }, {
            onConflict: 'product_id'
          });

        if (error) throw error;

        userLikes[productId] = true;
        setLikes(newCount);
        setIsLiked(true);
      }

      saveUserLikesToStorage(userLikes);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return { likes, isLiked, toggleLike, isLoading };
};
