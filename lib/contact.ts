import { contactCategoryOptions, contactRoleOptions } from "@/lib/site-data";

export type ContactSubmission = {
  categories?: string[];
  company?: string;
  email: string;
  location?: string;
  message: string;
  name: string;
  phone?: string;
  role?: string;
};

const allowedCategories = new Set(contactCategoryOptions.map((option) => option.value));
const allowedRoles = new Set(contactRoleOptions);

export function validateContactSubmission(
  input: ContactSubmission,
): { data?: ContactSubmission; error?: string; isSpam: boolean } {
  if (input.company?.trim()) {
    return { isSpam: true };
  }

  const name = input.name?.trim();
  const email = input.email?.trim();
  const phone = input.phone?.trim();
  const role = input.role?.trim();
  const location = input.location?.trim();
  const message = input.message?.trim();
  const categories = Array.isArray(input.categories)
    ? input.categories.filter((value) => allowedCategories.has(value))
    : [];

  if (!name) {
    return { error: "Please enter your name.", isSpam: false };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address.", isSpam: false };
  }

  if (!message) {
    return { error: "Please provide a brief description of the estate.", isSpam: false };
  }

  if (role && !allowedRoles.has(role)) {
    return { error: "Please choose a valid role option.", isSpam: false };
  }

  return {
    isSpam: false,
    data: {
      name,
      email,
      phone,
      role,
      location,
      message,
      categories,
      company: "",
    },
  };
}

