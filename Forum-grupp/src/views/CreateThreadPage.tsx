const CreateThreadPage = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = localStorage.getItem("user");

        const titleValue = e.currentTarget.title.value;
        const subjectValue = e.currentTarget.subject.value;
        const descriptionValue = e.currentTarget.description.value;

        if (!subjectValue || !descriptionValue) return;

        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        const thread = {
            id: crypto.randomUUID(),
            title: titleValue,
            user,
            date: formattedDateAndTime,
            category: subjectValue,
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
                <label htmlFor="title">Title</label>
                <input type="text" name="title"/>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select name="subject" id="subject">
                    <option value="QNA">Question and Answers</option>
                    <option value="MEME">Meme</option>
                    <option value="THREAD">Thread</option>
                </select>
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
