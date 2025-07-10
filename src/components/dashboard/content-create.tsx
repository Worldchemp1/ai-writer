import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState, type FormEvent } from "react";
import { Loader2Icon } from "lucide-react";

export default function ContentCreate() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
  };

  const handleChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Writer</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="grid w-full gap-3 mb-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Type your description here."
            id="description"
            name="description"
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <Button disabled={isLoading}>
          {isLoading && <Loader2Icon className="animate-spin" />}
          Generate
        </Button>
      </form>
    </div>
  );
}
