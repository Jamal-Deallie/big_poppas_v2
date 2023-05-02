import Layout from '@/components/Layout';
import Story from '@/containers/Story';
import TenCommandments from '@/containers/TenCommandments';
type Props = {};

export default function About({}: Props) {
  return (
    <Layout>
      <Story />
      <TenCommandments />
    </Layout>
  );
}
