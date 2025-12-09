"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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


const privacySchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email.")
    .min(1, "Email is required."),
  phone: z
    .string()
    .min(6, "Phone number must be at least 6 characters.")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),
  confirmPassword: z
    .string()
    .min(1, "Please confirm your password."),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

type PrivacyFormValues = z.infer<typeof privacySchema>;

type PrivacySectionProps = {
  setStep: (step: number) => void;
};

export const PrivacySection = ({ setStep }: PrivacySectionProps) => {
  const form = useForm<PrivacyFormValues>({
    resolver: zodResolver(privacySchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: PrivacyFormValues) {
    console.log("Step 2 values:", values);
    setStep(3); // ➜ Step 3 руу
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="you@example.com"
                  {...field}
                  className={cn(
                    "h-11 rounded-md border px-3 text-sm focus-visible:ring-0",
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  placeholder="+976 99112233"
                  {...field}
                  className={cn(
                    "h-11 rounded-md border px-3 text-sm focus-visible:ring-0",
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                  className={cn(
                    "h-11 rounded-md border px-3 text-sm focus-visible:ring-0",
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Re-enter password"
                  {...field}
                  className={cn(
                    "h-11 rounded-md border px-3 text-sm focus-visible:ring-0",
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

       
        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            className="border-gray-300 text-black hover:bg-gray-50"
            onClick={() => setStep(1)}
          >
            ← Back
          </Button>

          <Button
            type="submit"
            className="bg-black text-white hover:bg-black/80"
          >
            Continue 2/3 ➜
          </Button>
        </div>
      </form>
    </Form>
  );
};
