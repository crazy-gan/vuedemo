/**   
 * api接口统一管理
 */
import {post} from './http'
//获取token
export const login = p => post('/api/auth/sellerticketlogin', p)
//获取会员列表
export const memberslist = p => post('/api/wechat/membershipcard/weblist', p)