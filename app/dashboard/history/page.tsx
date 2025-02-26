import Templates from "@/app/(data)/Templates";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import React from "react";
import HistoryClientWrapper from "./HistoryClientWrapper";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();
  if (!user) {
    return <div className="m-5 p-5 border rounded-lg bg-white">Please log in to view your history.</div>;
  }
  
  // @ts-ignore
  const historyList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress?.emailAddress || ""))
    .orderBy(desc(AIOutput.id));
    
  return <HistoryClientWrapper historyList={historyList} templates={Templates} />;
}

export default History;