import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"

export default function DashboardLayout() {
    //chẹc use đã tồn tại hay chưa
    const { userId, isLoaded } = useAuth()

    // ĐIều hướng
    const navigate = useNavigate()

    console.log('test', userId)

    React.useEffect(() => {
        // chuyen sang trang signin
        if (!userId) {
            navigate("/sign-in")
        }
    }, [])

    if (!isLoaded) return "Loading..."

    return (
        <Outlet />
    )
}