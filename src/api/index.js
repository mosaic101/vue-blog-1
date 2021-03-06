import axios from 'axios'

import { BLOG_REPO, WORKLOG_REPO } from '@/shared/constants'
import { articleCategoryList } from '@/app/js/config'

const ORIGIN = 'https://api.github.com'
const OWNER = 'monine'
const ACCESS_TOKEN = '090bbff2743e2df29457' + 'd475ecec43be93c5fd57'

export function getArticleList ({ page = 1, size = 5 }) {
  const params = {
    filter: 'created',
    page: page,
    per_page: size,
    access_token: ACCESS_TOKEN
  }
  return axios.get(ORIGIN + '/repos/' + OWNER + '/' + BLOG_REPO + '/issues', { params })
}

export function getWorklogList ({ page = 1, size = 24 }) {
  const params = {
    filter: 'created',
    page: page,
    per_page: size,
    access_token: ACCESS_TOKEN
  }
  return axios.get(ORIGIN + '/repos/' + OWNER + '/' + WORKLOG_REPO + '/issues', { params })
}

export function getArticleInfo (category, num = 1) {
  articleCategoryList.forEach(article => {
    if (article.label === category) return (category = article.repo)
  })

  const params = {
    access_token: ACCESS_TOKEN
  }
  return axios.get(ORIGIN + '/repos/' + OWNER + '/' + category + '/issues/' + num, { params })
}

export function getCommentList (url, page = 1) {
  const params = {
    page,
    per_page: 30,
    access_token: ACCESS_TOKEN
  }
  return axios.get(url, { params })
}
