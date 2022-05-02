const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`);
}

// Create pages dynamically
exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    // Get all markdown data
    const result = await graphql(`
        {
            allMarkdownRemark(sort: {fields: frontmatter___created, order: DESC}) {
                nodes {
                    id
                    excerpt(format: PLAIN)
                    frontmatter {
                        created(formatString: "MMM DD, YYYY")
                        slug
                        title
                        category
                        language
                        last_update(formatString: "MMM DD, YYYY")
                        tags
                        type
                    }
                    headings(depth: h1) {
                        value
                    }
                }
            }
        }
    `);
    
    // If there is an error, throw it
    if (result.errors) {
        reporter.panicOnBuild(`There was an error building your content`, result.errors);
        return;
    }

    const all = result.data.allMarkdownRemark.nodes;
    if (all.length == 0) {
        reporter.warn(`No content has been found`);
        return;
    }
    
    // Define content types
    const posts = all.filter( (post) => post.frontmatter.type === 'blog');
    const projects = all.filter( (project) => project.frontmatter.type === 'project');


    /*********************************************** 
     * Articles
    ************************************************/
    posts.forEach( (post, index) => {
        const nextPost = index === posts.length - 1 ? null : posts[index + 1].id;
        const previousPost = index === 0 ? null : posts[index - 1].id;
        
        createPage({
            // Path for this page — required
            path: `blog/${post.frontmatter.slug}`,
            // Which component to load
            component: path.resolve(`src/templates/post.js`),
            // Add optional context data to be inserted as props into the page component.
            // The context data can also be used as arguments to the page GraphQL query.
            context: {
                id: post.id,
                slug: post.frontmatter.slug,
                nextPost,
                previousPost,
            },
        });
    });

    /*********************************************** 
     * Projects
    ************************************************/
     projects.forEach( (project) => {
        createPage({
            // Path for this page — required
            path: `projects/${project.frontmatter.slug}`,
            // Which component to load
            component: path.resolve(`src/templates/project.js`),
            // Add optional context data to be inserted as props into the page component.
            // The context data can also be used as arguments to the page GraphQL query.
            context: {
                id: project.id,
                slug: project.frontmatter.slug,
            },
        });
    });
   
    /*********************************************** 
     * CREATE SLUGS
     * https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#example-usage
     * https://mihaibojin.com/personal-site/blog-on-gatsbyjs
    ************************************************/
     exports.onCreateNode = ({ node, getNode, actions }) => {
        const { createNodeField } = actions;

        // Ensures we are processing only markdown files
        if (node.internal.type === "MarkdownRemark") {
            const value = createFilePath({ node, getNode });
            // Creates new query'able field with name of 'slug'
            createNodeField({
                name: `slug`,
                node,
                value,
            });
        }
    }
    // END
}


