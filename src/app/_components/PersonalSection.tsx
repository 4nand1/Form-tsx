"use client";

import { useState, useEffect } from "react";
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

const personalSchema = z.object({
  dateOfBirth: z.string().min(1, "Please select a date of birth."),
  profileImage: z.any().optional(),
});

type PersonalFormValues = z.infer<typeof personalSchema>;

type Props = {
  data: FormData;
  updateData: (values: Partial<FormData>) => void;
  goBack: () => void;
  goNext: () => void;
};

export const PersonalSection = ({ data, updateData, goBack, goNext }: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

 
  useEffect(() => {
    if (data.profileImage) {
      const url = URL.createObjectURL(data.profileImage);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [data.profileImage]);

  const form = useForm<PersonalFormValues>({
    resolver: zodResolver(personalSchema),
    mode: "onChange",
    defaultValues: {
      dateOfBirth: data.dateOfBirth,
    },
  });

  function onSubmit(values: PersonalFormValues) {
    const files = values.profileImage as FileList | undefined;
    const file = files?.[0] ?? data.profileImage ?? null;

    updateData({
      dateOfBirth: values.dateOfBirth,
      profileImage: file,
    });

    goNext();
  }

  return (
    <div>
      <Header step={3} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Date of birth <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    {...field}
                    className={cn(
                      "h-11 rounded-md border px-3 text-sm focus-visible:ring-0",
                      form.formState.errors.dateOfBirth
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
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Profile image <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <>
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const files = e.target.files;
                        field.onChange(files);
                        if (files && files[0]) {
                          const url = URL.createObjectURL(files[0]);
                          setPreviewUrl(url);
                        } else {
                          setPreviewUrl(null);
                        }
                      }}
                    />

                    <label
                      htmlFor="profile-upload"
                      className={cn(
                        "mt-1 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed px-3 text-sm",
                        form.formState.errors.profileImage
                          ? "border-red-500 bg-red-50 text-red-500"
                          : "border-blue-300 bg-gray-50 text-gray-500"
                      )}
                    >
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Profile preview"
                          className="h-full w-full rounded-md object-cover"
                        />
                      ) : (
                        <>
                          <span className="text-2xl">＋</span>
                          <span className="mt-1">Add image</span>
                        </>
                      )}
                    </label>
                  </>
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
              onClick={goBack}
            >
              ← Back
            </Button>

            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/80"
            >
              Submit 3/3 🔥
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
