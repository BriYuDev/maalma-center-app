import DashboardContent from "@/components/dashboard/content";
import { ArticleTable, UploadButton, DeleteAllButton }  from "./_components";

export default function ArticleDashboard() {
    return (
        <DashboardContent
            title="Artikel"
            description="Unggah artikel."
        >

            <div className="flex flex-col h-max">
                <ArticleTable/>
            </div>
            
        </DashboardContent>
    );
}
