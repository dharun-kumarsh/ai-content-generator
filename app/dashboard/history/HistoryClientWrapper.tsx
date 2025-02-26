"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { HISTORY } from "./page";

interface HistoryClientWrapperProps {
  historyList: HISTORY[];
  templates: any[];
}

function HistoryClientWrapper({ historyList, templates }: HistoryClientWrapperProps) {
  const GetTemplateName = (slug: string) => {
    const template = templates?.find((item) => item.slug === slug) || null;
    return template;
  };

  return (
    <div className="m-5 p-5 border rounded-lg bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">Search your previously generated AI Output</p>
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5">
        <h2 className="col-span-2">Template</h2>
        <h2 className="col-span-2">AI Response</h2>
        <h2>Date</h2>
        <h2>Words</h2>
        <h2>Copy</h2>
      </div>
      {historyList.map((item: HISTORY, index: number) => (
        <React.Fragment key={index}>
          <div className="grid grid-cols-7 my-5 py-3 px-3">
            <h2 className="col-span-2 flex gap-2 items-center">
              <Image src={GetTemplateName(item.templateSlug)?.icon} width={25} height={25} alt="icon" />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3 px-4">{item.aiResponse}</h2>
            <h2>{item.createdAt}</h2>
            <h2>{item?.aiResponse.length}</h2>
            <h2>
              <Button 
                variant={"ghost"} 
                className="bg-primary text-white" 
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </Button>
            </h2>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default HistoryClientWrapper;