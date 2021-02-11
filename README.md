# Blog
React, Markdown, GraphQL and GatsbyJS

# Not Secure!!! Make sure you account for cross-site scripting (XSS attacks) for sensitive data. 

## Getting Started with Gatsby
To start, we need to install the command line utility provided by GatsbyJS to quickly scaffold projects. Open your terminal and type the following command.

```npm install -g gatsby-cli```


## Check the version
```gatsby -v```

## you will get a similar output
2.4.5

## Then generate a new project...
```gatsby new gatsby-blog-starter```

## Run
```gatsby develop```

---
# Notes

WIP

https://medium.com/crowdbotics/how-to-build-your-own-blog-from-scratch-with-gatsbyjs-graphql-react-and-markdown-78352c367bd1 

The content of these two Markdown files will be our first two blog posts. The block surrounded in dashes is referred to as frontmatter, and the contents of the block can be used to inject React components with the specified data, e.g. path, date, title, tags etc.

## Creating the Blog Template
If you take a look at your blog in a browser, you will see that Gatsby is not yet displaying any blog posts that you have created. This is because Gatsby still does not know where these blog posts are or that you even want them to be displayed in the browser. However, if you try to query it in the GraphiQL browser tab, you can see that ::frontmatter:: data of blog post is available.

Each Markdown file is parsed into a node of type MarkdownRemark. To query all markdown files in on query, we are using allMarkdownRemark. All ::frontmatter:: fields are converted into GraphQL fields.

To display each post let us create a new template that will be consistent in style and getting ::frontmatter:: from GraphQL query we have just seen. Inside the src directory, create a new folder called templates and inside it, create a new file called blogPost.js.