import {
    Login,
    StockRequests,
    ReturnApprovals,
    StockSummary,
    DistributionRuns,
} from "@/pages";

export const routes = [
    {
        route: "/",
        page: <StockSummary />
    },
    {
        route: "/login",
        page: <Login />
        },

    {
        route: "/stock-requests",
        page: <StockRequests /> 
    },
    {
        route: "/return-approvals",
        page: <ReturnApprovals />
    },
    {
        route: "/stock-summary",
        page: <StockSummary />
    },
    {
        route: "/distribution-runs",
        page: <DistributionRuns />
    }
    ]