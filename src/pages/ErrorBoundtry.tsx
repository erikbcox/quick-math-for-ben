
import * as Sentry from '@sentry/browser';
import React from 'react';

interface State {
    hasError: boolean;
    error: any;
    eventId: string;
}

export default class ErrorBoundary extends React.Component<any, State> {
    state: State = {
        hasError: false,
        error: undefined,
        eventId: "",
    };

    componentDidCatch(error: any, info: any) {
        this.setState({ hasError: true, error });

        Sentry.withScope(scope => {
            scope.setExtras(info);
            const eventId = Sentry.captureException(error);
            this.setState({ eventId });
        });
    }

    render() {
        if (this.state.error) {
            return (
                <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>Report feedback</a>
            );
        } else {
            return this.props.children;
        }
    }
}