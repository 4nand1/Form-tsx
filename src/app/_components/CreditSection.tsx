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
import { set } from "zod";


type FormValues = {
  firstName: string;
  lastName: string;
  username: string;
};

export const CreditSection = ({ setStep }: { setStep: (step: number) => void  }) => {
  const form = useForm<FormValues>({
    mode: "onChange", 
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    
      

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
           
            <FormField
              control={form.control}
              name="firstName"
              rules={{
                required: "First name is required.",
                pattern: {
                  value: /^[A-Za-zА-Яа-яӨөҮүЁё]+$/,
                  message: "First name cannot contain special characters or numbers.",
                },
              }}
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
              rules={{
                required: "Last name is required.",
                pattern: {
                  value: /^[A-Za-zА-Яа-яӨөҮүЁё]+$/,
                  message: "Last name cannot contain special characters or numbers.",
                },
              }}
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
              rules={{
                required: "Username is required.",
                validate: (value) =>
                  value === "Amgaa"
                    ? "This username is already taken. Please choose another one."
                    : true,
              }}
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
            onClick={() => setStep(2)}
              type="submit"
              className="mt-2 w-full rounded-md bg-black py-3 text-sm font-medium text-white hover:bg-black/80"
            >
              Continue 1/3 ➜
            </Button>
          </form>
        </Form>
      
   
  );
};
