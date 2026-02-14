const BASE_URL = "http://localhost:5000";

export const aiService = {
    predictCategory: async (issueDescription) => {
        try {
            const response = await fetch(`${BASE_URL}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ issue_description: issueDescription }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to predict category");
            }

            return await response.json();
        } catch (error) {
            console.error("AI Service Error:", error);
            throw error;
        }
    },

    checkHealth: async () => {
        try {
            const response = await fetch(`${BASE_URL}/health`);
            return await response.json();
        } catch (error) {
            console.error("AI Service Health Check Error:", error);
            return { status: "unreachable" };
        }
    }
};
