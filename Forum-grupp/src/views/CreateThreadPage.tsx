const CreateThreadPage = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = localStorage.getItem("user");

        const subjectValue = e.currentTarget.subject.value;
        const descriptionValue = e.currentTarget.description.value;

        if (!subjectValue || !descriptionValue) return;

        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        const thread = {
            id: crypto.randomUUID(),
            user,
            date: formattedDateAndTime,
            subject: subjectValue,
            description: descriptionValue,
            comments: [],
        };

        const existingThreadsJSON = localStorage.getItem("threads");
        let threads = [];

        if (existingThreadsJSON) {
            threads = JSON.parse(existingThreadsJSON);
        }

        threads.push(thread);

        localStorage.setItem("threads", JSON.stringify(threads));
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
            </div>
            <button type="submit">Create Thread</button>
        </form>
    );
};

export default CreateThreadPage;
