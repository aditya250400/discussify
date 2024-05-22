/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
import ThreadForm from '../components/ThreadForm';
import Head from '../components/Head';

function CreateThreadPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-[100vh] md:flex md:justify-center md:items-center p-4">
      <Head title="Create Thread" />
      <ThreadForm />
    </div>
  );
}

export default CreateThreadPage;
