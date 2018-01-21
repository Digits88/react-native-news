import {orderBy} from "lodash";
import {
    NEWS_KEY,
    LANGUAGE,
    URL, CATEGORY
} from '../config/env';

export async function getNews() {
    try {
        let articles = await fetch(`${URL}?category=${CATEGORY}`, {
            headers: {
                'X-API-KEY': NEWS_KEY
            }
        });

        let result = await articles.json();
        articles = null;
        return orderBy(result.articles, 'publishedAt', 'desc')

    } catch (error) {
        throw error
    }
}

export async function getHealth() {
    try {
        let articles = await fetch(`${URL}?category=health`, {
            headers: {
                'X-API-KEY': NEWS_KEY
            }
        });

        let result = await articles.json();
        articles = null;
        return orderBy(result.articles, 'publishedAt', 'desc')

    } catch (error) {
        throw error
    }
}

export async function getScience() {
    try {
        let articles = await fetch(`${URL}?category=science`, {
            headers: {
                'X-API-KEY': NEWS_KEY
            }
        });

        let result = await articles.json();
        articles = null;
        return orderBy(result.articles, 'publishedAt', 'desc')

    } catch (error) {
        throw error
    }
}

export async function getSports() {
    try {
        let articles = await fetch(`${URL}?category=sports`, {
            headers: {
                'X-API-KEY': NEWS_KEY
            }
        });

        let result = await articles.json();
        articles = null;
        return orderBy(result.articles, 'publishedAt', 'desc')

    } catch (error) {
        throw error
    }
}

export async function getEntertainment() {
    try {
        let articles = await fetch(`${URL}?category=entertainment`, {
            headers: {
                'X-API-KEY': NEWS_KEY
            }
        });

        let result = await articles.json();
        articles = null;
        return orderBy(result.articles, 'publishedAt', 'desc')

    } catch (error) {
        throw error
    }
}