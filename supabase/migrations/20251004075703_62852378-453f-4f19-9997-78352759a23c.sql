-- Create table for product likes
CREATE TABLE public.product_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text UNIQUE NOT NULL,
  likes_count integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.product_likes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read likes (public data)
CREATE POLICY "Anyone can view product likes"
  ON public.product_likes
  FOR SELECT
  USING (true);

-- Allow anyone to insert new product like records
CREATE POLICY "Anyone can create product like records"
  ON public.product_likes
  FOR INSERT
  WITH CHECK (true);

-- Allow anyone to update like counts
CREATE POLICY "Anyone can update product likes"
  ON public.product_likes
  FOR UPDATE
  USING (true);

-- Create index for faster lookups
CREATE INDEX idx_product_likes_product_id ON public.product_likes(product_id);