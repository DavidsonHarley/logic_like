import type React from "react";
import cls from "./styles/ideas-layout.module.scss";

type IdeasLayoutProps = {
  content: React.ReactNode;
};

export function IdeasLayout({ content }: IdeasLayoutProps) {
  return <div className={cls.ctnIdeas}>{content}</div>;
}
