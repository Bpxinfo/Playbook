"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import {
  IconBrandAzure,
} from "@tabler/icons-react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface AuthContextType {
  signInWithMicrosoft: () => Promise<void>;
}

interface SignupFormDemoProps {
  onClose: () => void;
}

export default function SignupFormDemo({ onClose }: SignupFormDemoProps) {
  const navigate = useNavigate();
  const { signInWithMicrosoft } = useAuth() as AuthContextType;
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Sign up with Supabase
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstname,
            last_name: formData.lastname,
          }
        }
      });

      if (signUpError) throw signUpError;

      // Sign in immediately after successful signup
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (signInError) throw signInError;

      // If signup and signin are successful, close modal and navigate to ccc-playbook
      onClose();
      navigate("/ccc-playbook");
    } catch (err: any) {
      // Handle specific error cases
      if (err.message.includes('email already registered')) {
        setError("This email is already registered. Please sign in instead.");
      } else if (err.message.includes('password')) {
        setError("Password must be at least 6 characters long.");
      } else {
        setError(err.message || "An error occurred during signup");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = async (provider: 'microsoft') => {
    try {
      await signInWithMicrosoft();
      // Close modal after successful social signup
      onClose();
    } catch (err: any) {
      setError(err.message || `Error signing up with ${provider}`);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black flex flex-col items-center">
      <div className="w-full flex justify-start mb-4">
        <button
          onClick={() => navigate('/login')}
          className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Login
        </button>
      </div>
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Welcome to the CCC Playbook
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Create your account to get started
      </p>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-neutral-800 dark:text-neutral-200">First name</Label>
            <Input 
              id="firstname" 
              name="firstname"
              placeholder="Tyler" 
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-neutral-800 dark:text-neutral-200">Last name</Label>
            <Input 
              id="lastname" 
              name="lastname"
              placeholder="Durden" 
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-neutral-800 dark:text-neutral-200">Email Address</Label>
          <Input 
            id="email" 
            name="email"
            placeholder="user@gmail.com" 
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-neutral-800 dark:text-neutral-200">Password</Label>
          <Input 
            id="password" 
            name="password"
            placeholder="••••••••" 
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            type="button"
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            onClick={() => handleSocialSignup('microsoft')}
          >
            <IconBrandAzure className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Continue with Microsoft
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}; 