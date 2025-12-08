import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types will be generated from Supabase schema
// For now, we'll use basic types for the expected tables
export interface Edition {
  id: string;
  year: number;
  destination: string;
  country: string;
  dates_start: string;
  dates_end: string;
  description: string;
  featured_image: string;
  gallery_images: string[];
  video_urls: string[];
  max_participants: number;
  status: "upcoming" | "past" | "cancelled";
  created_at: string;
}

export interface Testimonial {
  id: string;
  edition_id: string;
  author_name: string;
  author_location: string;
  content: string;
  featured: boolean;
  created_at: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  edition_id?: string;
  published_at: string;
  created_at: string;
}

