"use client"

import { useContext, useState } from "react";
import DashboardContext from "./context";

export default function DashboardWrapper({children}){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return <DashboardContext.Provider value={{sidebar: [sidebarOpen, setSidebarOpen]}}>
        {children}
    </DashboardContext.Provider>
}

export const useDashboard = () => useContext(DashboardContext);
export const useSidebar = () => useDashboard()['sidebar'];