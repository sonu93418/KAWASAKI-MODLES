import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-kawasaki-dark flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-display text-kawasaki-green mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 mb-6">
              The 3D showcase encountered an error. This might be because the 3D models are not yet loaded.
            </p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary px-6 py-3 rounded-lg"
            >
              Try Again
            </button>
            <div className="mt-6 text-xs text-gray-500">
              <details>
                <summary className="cursor-pointer hover:text-kawasaki-green">
                  Show technical details
                </summary>
                <pre className="mt-4 p-4 bg-kawasaki-gray-900 rounded text-left overflow-auto max-h-40">
                  {this.state.error?.stack}
                </pre>
              </details>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}