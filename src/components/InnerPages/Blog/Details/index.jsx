import React from 'react';
//= Components
import Content from './Content';
import Tags from './Tags';
import NextPrev from './NextPrev';
import WriterCard from './WriterCard';
import CommentsCards from './Comments/Cards';
import CommentsForm from './Comments/Form';
import Widgets from '../Widgets';

function Details() {
  return (
    <section className="tc-blog-details-style1">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-8">
            <div className="main-post">
              {/* Content */}
              <Content />
              {/* Tags */}
              <Tags />
              {/* Next & Prev Posts */}
              <NextPrev />
              {/* Writer */}
              <WriterCard />
              {/* Comments */}
              <CommentsCards />
              <CommentsForm />
            </div>
          </div>
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </section>
  )
}

export default Details