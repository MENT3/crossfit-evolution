import { User, SignInWithPasswordCredentials, SignUpWithPasswordCredentials, AuthResponse } from '@supabase/supabase-js'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      score: {
        Row: {
          id: number
          created_at: string
          workout_id: number
          value: number
          type: number
          name: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          workout_id: number
          value: number
          type?: number
          name: string
        }
        Update: {
          id?: number
          created_at?: string | null
          workout_id?: number
          value?: number
          type?: number
          name?: string
        }
      }
      workout: {
        Row: {
          id: number
          created_at: string
          description: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          description: string
        }
        Update: {
          id?: number
          created_at?: string | null
          description?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export interface AuthContextProps {
  signUp: (payload: SignUpWithPasswordCredentials) => Promise<AuthResponse>,
  signInWithPassword: (payload: SignInWithPasswordCredentials) => Promise<AuthResponse>,
  signOut: () => void,
  user: User | null
}
