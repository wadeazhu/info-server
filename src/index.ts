import dotenv from 'dotenv'
import LoveMsg from './libs/LoveMsg'
dotenv.config()
import { wxNotify } from './libs/WxNotify'


// 早安、午安、晚安 => 由环境变量控制
// LoveMsg()
const template = {
  msgtype: 'text',
  text: {
    content: "message",
  },
}

wxNotify(template)
