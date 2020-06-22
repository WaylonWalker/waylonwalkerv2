const test_data = {
    "data": {
        "allMarkdownRemark": {
            "edges": [
                {
                    "node": {
                        "excerpt": "I am starting a redesign of my website.  I have started cross posting to dev.to more regularly.  With that I have been making more detailed…",
                        "fields": {
                            "slug": "/blog/i-finally-fixed-my-styled-components-in-gatsby-js/"
                        },
                        "frontmatter": {
                            "twitter_week_0": "I finally fixed my Styled-Components in gatsby.js",
                            "twitter_week_1": "",
                            "twitter_week_2": "",
                            "twitter_week_4": "",
                            "twitter_week_12": "",
                            "short_url": "waylonwalker.com/b/styf",
                            "title": "I finally fixed my Styled-Components in gatsby.js",
                            "date": "2020-02-08T15:07:00.000Z",
                            "cover": {
                                "relativePath": "fix-styled-components.png"
                            },
                            "twitter_cover": {
                                "id": "c2975d20-bc57-5853-b401-35627aa72524",
                                "relativePath": "fix-styled-components.png"
                            }
                        }
                    }
                },
                {
                    "node": {
                        "excerpt": "Netlify I have happily had my personal site waylonwalker.com hosted on netlify for nearly 2 years now.  In fact I have hosted about a dozen…",
                        "fields": {
                            "slug": "/blog/should-i-switch-to-zeit-now/"
                        },
                        "frontmatter": {
                            "twitter_week_0": "Should I switch to Zeit Now?",
                            "twitter_week_1": "Where do you host your personal site?",
                            "twitter_week_2": "Is anyone using Zeit Now to how their personal site?",
                            "twitter_week_4": "",
                            "twitter_week_12": "",
                            "short_url": "",
                            "title": "Should I switch to Zeit Now",
                            "date": "2020-02-06T22:38:00.000Z",
                            "cover": {
                                "relativePath": "should-i-switch-to-zeit-now.png"
                            },
                            "twitter_cover": {
                                "id": "5e670954-a45f-5845-8477-894c1efcad32",
                                "relativePath": "should-i-switch-to-zeit-now.png"
                            }
                        }
                    }
                },
                {
                    "node": {
                        "excerpt": "Finally after years of hand typing out a full  I foudn there is a setting to automatcally push to the current branch. More realisitically I…",
                        "fields": {
                            "slug": "/blog/git-push-without-setting-upstream/"
                        },
                        "frontmatter": {
                            "twitter_week_0": "Ship Code Faster with this one git config.\n\ngit config --global push.default current          ",
                            "twitter_week_1": "",
                            "twitter_week_2": "",
                            "twitter_week_4": "",
                            "twitter_week_12": "",
                            "short_url": "waylonwalker.com/b/gitp",
                            "title": "git push without setting upstream",
                            "date": "2020-02-04T12:18:00.000Z",
                            "cover": {
                                "relativePath": "ship-faster.png"
                            },
                            "twitter_cover": {
                                "id": "6d204ad4-0249-59d0-b943-dc6d84fcfed0",
                                "relativePath": "ship-faster.png"
                            }
                        }
                    }
                }
            ]
        }
    }
}

// console.log(test_data.data.);
const get_tweet = (data, key, offset) => {
    const date = new Date(data.frontmatter.date)
    console.log(date);
    const day = 60 * 60 * 24 * 1000
    nextDay = new Date(date.getTime() + offset * day)
    console.log(`next_day`, nextDay)

    return {
        description: data.frontmatter.description,
        date: data.frontmatter.date,
        guid: data.fields.slug + `tweet_${offset}`,
        content: data.frontmatter[key]
    }

}

const weeks = [...Array(105).keys()]
const output = [].concat(...test_data
    .data
    .allMarkdownRemark
    .edges
    .map(edge => weeks.map(week => get_tweet(edge.node, `twitter_week_${week}`, week)).filter(week => week.content !== undefined && week.content !== ''))
)

// const output2 = {
//     description: edge.node.excerpt,
//     date: edge.node.frontmatter.date,
//     url: edge.node.frontmatter.short_url,
//     guid: edge.node.fields.slug + '/tweet_0',
//     custom_elements: [
//       { "content:encoded": edge.node.frontmatter.twitter_announcement },
//       { "image": edge.node.frontmatter.twitter_cover === null ? '' : 'https://waylonwalker.com/' + edge.node.frontmatter.twitter_cover.relativePath }
//     ],
//   }
// }

// console.log(weeks);
console.log(output);
