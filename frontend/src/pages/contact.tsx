// pages/contact/index.tsx
import { useState } from 'react';
import Layout from '@/components/layouts/page/Boxed';
import CustomHead from '@/components/base/CustomHead';
import content from '@/data/index.json';

const ContactPage = () => {
  const page = content.contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simulate form submission (replace with your endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <CustomHead title={page.seo.title} description={page.seo.description} />
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold  mb-4">{page.content.title}</h1>
        <p className=" mb-6">{page.content.description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {page.form.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium  mb-1">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  rows={4}
                  className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {page.form.submitText}
          </button>

          {status === 'success' && (
            <p className="text-green-600 mt-4">{page.form.successMessage}</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 mt-4">{page.form.errorMessage}</p>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
