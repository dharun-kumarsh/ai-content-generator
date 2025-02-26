"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment"

function CreateNewContent() {
    const params = useParams();
    const templateSlug = params?.["template-slug"];

    const selectedTemplate: TEMPLATE | undefined = Templates.find(
        (item) => item.slug === templateSlug
    );
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>();
    const { user } = useUser();

    const GenerateAIContent = async (formData: any) => {
        setLoading(true)
        const SelectedPrompt = selectedTemplate?.aiPrompt;

        const FinalAIPrompt = JSON.stringify(formData) + "," + SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIPrompt);
        setAiOutput(result.response.text());
        await SaveInDb(formData, selectedTemplate?.slug, result.response.text());
        setLoading(false)
    }

    const SaveInDb = async (formData: any, slug: any, aiOutput: any) => {
        const result = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiOutput,
            createdBy: user?.primaryEmailAddress?.emailAddress || "",
            createdAt: moment().format('DD/MM/YYYY'),
        })
        console.log(result)
    }

    if (!selectedTemplate) {
        return <div className="p-5 text-red-500">Template not found</div>;
    }

    return (
        <div className="p-10">
            <Link href={"/dashboard"}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                {/* Form Section */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading}
                />
                {/* Output Section */}
                <div className="col-span-2">
                    <OutputSection
                        aiOutput={aiOutput}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;

