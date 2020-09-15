import * as React from "react";

export const IntroHeader = (props) => {
    const { title, subheading, button } = props;
    return (
        <section id="banner" className="major">
            <div className="inner">
                <header className="major">
                    <h1>{title}</h1>
                </header>
                <div className="content">
                    <p>
                        {subheading}
                    </p>
                    <ul className="actions">
                        <li>
                            <a href="#one" className="button next scrolly">
                                {button}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}