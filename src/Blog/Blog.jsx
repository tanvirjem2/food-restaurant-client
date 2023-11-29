
const Blog = () => {
    return (
        <div>

            {/* Answer to the question no. 1 */}

            <div className="space-y-4">

                <h1 className="font-extrabold">1. What is One way data binding?</h1>

                <p><span className="font-extrabold underline">Answer</span>: One-way data binding is a concept in web development that describes the flow of data from a data source <span className="font-extrabold">(such as a model or component)</span> to a view <span className="font-extrabold">(UI or presentation layer)</span>. In one-way data binding, the data is only allowed to flow in one direction, typically from the source to the target.</p>

                <p>There are <span className="font-extrabold">two main types</span> of one-way data binding:</p>

                <p><span className="font-extrabold">1. From Model to View (or Source to Target)</span></p>

                <p><span className="font-extrabold">2. From Component to View (or Parent to Child)</span></p>

            </div>

            {/* Answer to the question no. 2 */}

            <div className="space-y-4 mt-6">
                <h1 className="font-extrabold">2. What is NPM in node.js?</h1>

                <p><span className="font-extrabold underline">Answer</span>: NPM stands for <span className="font-extrabold">Node Package Manager</span>. It is the default package manager for Node.js, which is a JavaScript runtime built on the Chrome V8 JavaScript engine. <span className="font-extrabold">NPM is used for managing and sharing packages or modules of JavaScript code written by other developers.</span> These packages can be installed and used in your Node.js projects.</p>

                <p><span className="font-extrabold">Key features and functionalities</span> of NPM include:</p>

                <p><span className="font-extrabold">1. Package Installation</span></p>
                <p><span className="font-extrabold">2. Dependency Management</span></p>
                <p><span className="font-extrabold">3. Version Management</span></p>
                <p><span className="font-extrabold">4. Package Publishing</span></p>
                <p><span className="font-extrabold">5. Scripts</span></p>
                <p><span className="font-extrabold">6. Global Installation</span></p>
            </div>

            {/* Answer to the question no. 3 */}

            <div className="space-y-4 mt-6">
                <h1 className="font-extrabold">3. Different between Mongodb database vs mySQL database.</h1>

                <p><span className="font-extrabold underline">Answer</span>:</p>

                <table className="border-2 rounded-xl">
                    <tr>
                        <th className="border-2">Mongodb database</th>
                        <th className="border-2">mySQL database</th>
                    </tr>

                    {/* Part - 1 */}

                    <tr>
                        <td className="border-2">
                            1. MongoDB is a NoSQL database, specifically a document-oriented database. It stores data in flexible, JSON-like documents with a dynamic schema, allowing for a wide variety of data structures.
                        </td>
                        <td className="border-2">
                            1. MySQL is a relational database management system (RDBMS) that uses a structured query language (SQL) for defining and manipulating the data in tables.
                        </td>
                    </tr>

                    {/* Part - 2 */}

                    <tr>
                        <td className="border-2">
                            2. MongoDB uses a flexible, schema-less data model. Each record in a MongoDB database is a JSON-like document, and collections of documents make up databases.
                        </td>
                        <td className="border-2">
                            2. MySQL follows a rigid, structured data model where data is organized into tables with predefined schemas. Each table consists of rows and columns, and relationships between tables can be established.
                        </td>
                    </tr>

                    {/* Part - 3 */}

                    <tr>
                        <td className="border-2">
                            3. MongoDB is schema-less, meaning that each document in a collection can have a different structure. This flexibility is particularly useful for evolving data models.
                        </td>
                        <td className="border-2">
                            3. MySQL uses a fixed schema, and changes to the schema often require altering the table structure.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2">
                            4. MongoDB uses a query language similar to JSON. Queries are expressed as documents with a structure similar to the data they retrieve.
                        </td>
                        <td className="border-2">
                            4. MySQL uses SQL (Structured Query Language) for querying and managing the database. SQL is a standardized language for relational databases.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2">
                            5. MongoDB is designed to scale horizontally, meaning you can add more servers to your MongoDB database to handle increased load and storage requirements.
                        </td>
                        <td className="border-2">
                            5. MySQL traditionally scales vertically, meaning you would need to add more resources (CPU, RAM) to a single server to handle increased load. However, MySQL also supports some level of horizontal scaling through techniques like sharding and replication.
                        </td>
                    </tr>
                    <tr>
                        <td className="border-2">
                            6. MongoDB supports ACID transactions, but the support for multi-document transactions was introduced in later versions.
                        </td>
                        <td className="border-2">
                            6. MySQL has a long history of supporting ACID transactions, making it a solid choice for applications that require transactional integrity.
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Blog;