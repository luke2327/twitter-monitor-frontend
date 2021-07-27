module.exports = {
    public: {
        search: "Search",
        followers: "Followers",
        following: "Following",
        statuses_count: "Status count",
        deleted: "deleted",
        protected: "protected",
        retry: "retry",
        profile: "profile",
        tweet: "tweet",
        error: "error",
        translate: "translate ",
        loading: "loading",
    },
    timeline: {
        message: {
            not_exist: "@{0} is not exist",
            no_longer_monitor: "This account has been {0}, we will no longer monitor it",
        },
        nav_bar: {
            all: 'All',
            origin: 'Origin',
            retweet: 'Retweets',
            media: 'Media',
            no_image: 'No image',
        },
    },
    translate: {
        message: {
            translate_by: "Translate by {0}",
            hide_translated: "Hide translated Tweet",
        }
    }
}


module.exports = {
    public: {
        search: "Search",
        followers: "Followers",
        following: "Following",
        statuses_count: "Status count",
        deleted: "Deleted",
        protected: "Protected",
        retry: "Retry",
        profile: "Profile",
        tweet: "Tweet",
        error: "error",
        translate: "Translate",
        loading: "Loading",
        timestamp: "Timestamp",
        origin: 'Original',
        retweet: 'Retweets',
        media: 'Media',
        username: "Username",
        group: "Group",
        time: {
            second: "second | seconds",
            minute: "minute | minutes",
            hour: "hour | hours",//其他语言可能会出现单复数
            day: "day | days",
        }
    },
    timeline: {
        message: {
            not_exist: "@{0} is not exist",
            no_longer_monitor_deleted: "This account has been deleted, we will no longer monitor it",
            no_longer_monitor_protected: "This account has been protected, we will no longer monitor it",
            load_more: "Load more",
            no_more: "No more content",
        },
        nav_bar: {
            all: 'All',
            origin: 'Original',
            retweet: 'Retweets',
            media: 'Media',
            no_image: 'No image',
        },
        side_tags: {
            settings: "Settings",
            about: "About",
            stats: "Stats",
            status: "Status",
            api: "API",
            media_download_tool: "Media tools",
            rss: "RSS",
            backstage: "Backstage",
        },
        scripts: {
            time: "Time",
            message: {
                update_tweets: "{0} tweet loaded | {0} tweets loaded",
                missing_parameter: "Missing parameters",
                failed_to_generate_chart: "Chart generation failure #{0}",
            }
        }
    },
    translate: {
        message: {
            translate_by: "Translated by {0}",
            clean: "Clean translate",
            hide_translated: "Hide translated Tweet",
            translate_profile: "Translate bio",
            translate_tweet: "Translate Tweet",
        }
    },
    userinfo: {
        message: {
            load_success: "Load {0} (@{1}) success"
        }
    },
    candlestick_chart: {
        chart: {
            candle_sticks: "Candle sticks"
        }
    },
    project_list: {
        button: {
            select_project: "Select a project"
        }
    },
    quote_card: {
        card: {
            this_tweet_is_not_available: "Tweet unavailable."
        }
    },
    search :{
        normal_search: {
            input_text_here: "Please input text here",
            select: "Select",
            search_by_text: "Text search",
            search_by_date: "Date search",
            advanced_search: "Advanced search",
        },
        advanced_search: {
            all_of_these_words: "All of these words",
            example_text_include: "Example: what’s happening · contains both “what’s” and “happening”",
            from_this_accounts: "From these accounts",
            example_from_this_accounts: "Example: @Twitter · From @Twitter",
            clean: "Clean",
            example_search_time: "Example: 2021-01-01 -> 2021-01-02",
            nav_bar: {
                all: 'All',
                origin: 'Original',
                retweet: 'Retweets',
                media_only: 'Media only',
                reverse: "Reverse",
                hidden: "Hidden tweets",
            },
            tips: {
                line1: {
                    text: "* {or_mode} means “a or b”, {and_mode} means “a and b”，{not_mode} will means “not (a or b)” or “not (a and b)”",
                    or_mode: "OR mode",
                    and_mode: "AND mode",
                    not_mode: "NOT mode"
                },
                line2: "* Use space to split words",
            },
            search: "Search",
        },
        nav_list: {
            search_by_tag: "Search by tag {0}",
            search_by_tweet_id: "Search by tweet id {0}",
            search_by_text: "Search {0}"
        },
        tips: {
            tips: "Tips",
            tips_sub_title: "How to use search mode",
            line1: "First char is {at} can search user, supported twitter username or label name, also supported regex",
            line2: "First char is {hashtag} can search hashtag",
            line3: "First char is {cashtag} can search cashtag, cashtag is used for Stock (Like: $TWTR) or Cryptocurrency (Like: $BTC)",
            line4: "Input text can search it, add {at_username} can filter",
            line5: "Input text or tweet id in user's page can search current user's tweet",
            line6: "input {help_en} can show this tips",
        }
    },
    tw_card: {
        text: {
            not_supported_type: "Not supported type",
        }
    },
    tweet: {
        text: {
            pinned_tweet: "Pinned tweet",
            this_is_a_dispute_tweet: "This is a dispute tweet",
            learn_more: "Learn more"
        }
    },
    polls: {
        vote: "{0} vote | {0} votes",//单复数
        final_results: "Final results",
        wait_for_sync: "Waiting for sync",
        eta: "{0} left",
    },
    notice: {
        nothing_here: "Nothing here",
        internet_speed_is_too_slow_now_image_display_has_been_turned_off: "The current network speed is slow, has turned off the picture display",
    },
    settings: {
        language: "Language",
        api_path: "API path",
        default_api_path: "Default API path: {0}",
        media_path: "Media path",
        default_media_path: "Default media path: {0}",
    },
}
