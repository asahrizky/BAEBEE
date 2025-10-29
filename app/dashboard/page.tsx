// app/dashboard/page.tsx
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Users, Eye, Clock, Signal } from "lucide-react";
  
  export default function DashboardPage() {
    return (
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
        
        {/* Grid untuk Kartu Statistik (Overview) */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,289</div>
              <p className="text-xs text-green-500">+2.62% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">134k</div>
              <p className="text-xs text-green-500">+2.38% from last month</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Realtime Users</CardTitle>
              <Signal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">562</div>
              <p className="text-xs text-red-500">-2.38%</p>
            </CardContent>
          </Card>
  
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visits Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6h 8m</div>
              <p className="text-xs text-green-500">+2.57%</p>
            </CardContent>
          </Card>
        </div>
  
        {/* Placeholder untuk widget lain dari referensi Anda */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Global Activity</CardTitle>
              <CardDescription>(Placeholder for World Map)</CardDescription>
            </CardHeader>
            <CardContent className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md">
              {/* Anda bisa tambahkan library peta di sini */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visit by device</CardTitle>
               <CardDescription>(Placeholder for Donut Chart)</CardDescription>
            </CardHeader>
            <CardContent className="h-64 bg-gray-100 dark:bg-gray-800 rounded-md">
               {/* Anda bisa tambahkan library chart di sini */}
            </CardContent>
          </Card>
        </div>
        
      </div>
    );
  }