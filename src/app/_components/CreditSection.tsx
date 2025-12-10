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
import { Header } from "./Header";
import type { FormData } from "../page";

const creditSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required.")
    .regex(
      /^[A-Za-zА-Яа-яӨөҮүЁё]+$/,
      "First name cannot contain special characters or numbers."
    ),
  lastName: z
    .string()
    .min(1, "Last name is required.")
    .regex(
      /^[A-Za-zА-Яа-яӨөҮүЁё]+$/,
      "Last name cannot contain special characters or numbers."
    ),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .max(20, "Username must be at most 20 characters long."),
});

type CreditFormValues = z.infer<typeof creditSchema>;

type Props = {
  data: FormData;
  updateData: (values: Partial<FormData>) => void;
  goNext: () => void;
};

export const CreditSection = ({ data, updateData, goNext }: Props) => {
  const form = useForm<CreditFormValues>({
    resolver: zodResolver(creditSchema),
    mode: "onChange",
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
    },
  });

  function onSubmit(values: CreditFormValues) {
    updateData(values);
    goNext();
  }

  return (
    <div>
      <Header step={1} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  First name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.firstName
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
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Last name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.lastName
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-gray-800">
                  Username <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Placeholder"
                    {...field}
                    className={cn(
                      "mt-1 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.username
                        ? "border-red-500 bg-red-50"
                        : "border-blue-300"
                    )}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-2 w-full rounded-md bg-black py-3 text-sm font-medium text-white hover:bg-black/80"
          >
            Continue 1/3 ➜
          </Button>
        </form>
      </Form>
    </div>
  );
};
