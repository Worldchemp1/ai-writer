import { Link } from "react-router-dom";
import type {
  TPromptHistory,
  TPromptLink,
} from "@/shared/types/prompt-history.type";

type TPromptHistoryProps = {
  items: TPromptHistory[];
};

export default function PromptHistory({ items }: TPromptHistoryProps) {
  return (
    <nav className="mt-8">
      {items.map((item: TPromptHistory) => (
        <div key={item.date} className="mt-4">
          <h5 className="text-sm text-gray-400 font-semibold">{item.date}</h5>
          <nav className="mt-2">
            {item.links.map((link: TPromptLink) => (
              <Link
                key={link.url}
                to={link.url}
                className="flex items-center rounded-md font-medium text-sm hover:bg-neutral-200 px-3 py-2"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </nav>
  );
}
