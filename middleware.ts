import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Yönetim paneli ve API rotalarını koru
  if (request.nextUrl.pathname.startsWith('/yonetim-2025') || 
      request.nextUrl.pathname.startsWith('/api/yonetim-2025')) {
    
    const authHeader = request.headers.get('authorization')
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }
    
    const encodedCredentials = authHeader.split(' ')[1]
    const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8')
    const [username, password] = credentials.split(':')
    
    // Güvenli kullanıcı adı ve şifre (production'da environment variable kullanın)
    const validUsername = process.env.ADMIN_USERNAME || 'admin'
    const validPassword = process.env.ADMIN_PASSWORD || 'admin123'
    
    if (username !== validUsername || password !== validPassword) {
      return new NextResponse('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/yonetim-2025/:path*', '/api/yonetim-2025/:path*']
} 