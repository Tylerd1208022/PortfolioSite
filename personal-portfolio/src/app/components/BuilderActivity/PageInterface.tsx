interface Page{
    prompt: string;
    answers: Record<string,string>
    correctAnswer: string;
    correctPrompt: string;
}
export default Page;