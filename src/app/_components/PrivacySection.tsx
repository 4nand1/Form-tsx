"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { Header } from "./Header";

type FormValues = {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  setStep: (step: number) => void;
};

export const PrivacySection = ({ setStep }: Props) => {
  const form = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("Step 2 values:", values);
    setStep(3); 
  };

  return (
    <>
      <Header />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
         
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please provide a valid email address.",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.email
                        ? "border-red-500 bg-red-50"
                        : "border-blue-300"
                    )}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            rules={{
              required: "Phone number is required.",
              pattern: {
                value: /^[0-9+\-\s()]{6,}$/,
                message: "Please provide a valid phone number.",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Phone number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.phone
                        ? "border-red-500 bg-red-50"
                        : "border-blue-300"
                    )}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            rules={{
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters.",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Password <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.password
                        ? "border-red-500 bg-red-50"
                        : "border-blue-300"
                    )}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            rules={{
              required: "Please confirm your password.",
              validate: (value) =>
                value === form.getValues("password") ||
                "Passwords do not match.",
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Confirm password <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.confirmPassword
                        ? "border-red-500 bg-red-50"
                        : "border-blue-300"
                    )}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <div className="mt-4 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              className="border border-gray-300 bg-white text-sm hover:bg-gray-50"
              onClick={() => setStep(1)}
            >
              ← Back
            </Button>

            <Button
              type="submit"
              className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/80"
            >
              Continue 2/3 ➜
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
