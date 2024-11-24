export const prompts = [
    {
        id: 0,
        icon: "history_edu",
        description: "Analyze of the following document and run a task associated with it.",
        function: "Document Analyze",
        type: "analyze",
        placeholder: "Send a message..."
    },
    {
        id:1,
        icon: "translate",
        description: "Translate the entire document into a selected language.",
        function: "Document Translation",
        type: "translate",
        placeholder: "e.g., Translate to French, Spanish, or German"
    },
    {
        id:2,
        type: "summarize",
        icon: "content_cut",
        description: "Summarize the content of the document into a few key points.",
        function: "Text Summarization",
        placeholder: "e.g., Summarize this to 5 bullet points"
    },
    {
        id:3,
        type: "categorize",
        icon: "category",
        description: "Automatically categorize the document based on its content.",
        function: "Document Categorization",
        placeholder: "e.g., Classify this as financial, legal, or educational"
    },
    {
        id:4,
        type: "optimize",
        icon: "lightbulb_2",
        description: "Conduct a thorough review to correct grammar, spelling, and punctuation errors, enhance structure, and flag passive voice, jargon, or repetitive phrases.",
        function: "Structure Optimization",
        placeholder: "e.g., Make this content more engaging and easier to read"
    },
    {
        id:5,
        type: "highlight",
        icon: "format_ink_highlighter",
        description: "Highlight the most important sentences or paragraphs in the document.",
        function: "Key Content Highlighting",
        placeholder: "e.g., Highlight critical insights or main arguments"
    },
    {
        id:6,
        type: "email",
        icon:"mail",
        description: "Generate Professional Email",
        function: "Generate Professional Email",
        placeholder: "e.g., Draft a formal business email"
    }
];
