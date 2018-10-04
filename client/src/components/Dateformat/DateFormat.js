import React from "react";

var IntlMixin = ReactIntl.IntlMixin;
var FormattedDate = ReactIntl.FormattedDate;

export const Component = React.createClass({
    mixins: [IntlMixin],

    render: function () {
        return (
            <p>
                <FormattedDate
                    value={new Date()}
                    day="numeric"
                    month="long"
                    year="numeric" />
            </p>
        );
    }
});