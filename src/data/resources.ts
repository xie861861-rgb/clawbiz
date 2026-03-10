export interface Resource {
  title: string;
  desc: string;
  url: string;
  source: string;
  sourceIcon?: string;
  lang: 'zh' | 'en';
  category: ResourceCategory;
  featured?: boolean;
  tags?: string[];
}

export type ResourceCategory =
  | 'official'
  | 'getting-started'
  | 'channel-integration'
  | 'skill-dev'
  | 'video'
  | 'deep-dive'
  | 'tools'
  | 'cloud-deploy'
  | 'use-cases';

export const categoryMeta: Record<
  ResourceCategory,
  { icon: string; label: string; labelEn: string; color: string }
> = {
  official: {
    icon: '📖',
    label: '官方资源',
    labelEn: 'Official',
    color: 'blue',
  },
  'getting-started': {
    icon: '🏁',
    label: '入门部署',
    labelEn: 'Getting Started',
    color: 'green',
  },
  'channel-integration': {
    icon: '📱',
    label: '平台接入',
    labelEn: 'Channels',
    color: 'purple',
  },
  'skill-dev': {
    icon: '🧩',
    label: '技能开发',
    labelEn: 'Skills',
    color: 'orange',
  },
  video: {
    icon: '📹',
    label: '视频教程',
    labelEn: 'Videos',
    color: 'red',
  },
  'deep-dive': {
    icon: '🔬',
    label: '深度文章',
    labelEn: 'Deep Dives',
    color: 'indigo',
  },
  tools: {
    icon: '🔧',
    label: '工具与插件',
    labelEn: 'Tools',
    color: 'teal',
  },
  'cloud-deploy': {
    icon: '☁️',
    label: '云平台部署',
    labelEn: 'Cloud Deploy',
    color: 'sky',
  },
  'use-cases': {
    icon: '💡',
    label: '玩法与场景',
    labelEn: 'Use Cases',
    color: 'amber',
  },
};

// Stats - simplified
export const stats = {
  totalResources: 0,
  totalVideos: 0,
  totalArticles: 0,
};

// 简化版资源 - 仅保留ClawBiz联系方式
export const resources: Resource[] = [
  {
    title: 'ClawBiz 企业咨询',
    desc: '专业企业AI转型咨询服务',
    url: '#contact',
    source: 'ClawBiz',
    lang: 'zh',
    category: 'official',
    featured: true,
    tags: ['咨询', '企业'],
  },
  {
    title: 'ClawBiz Services',
    desc: 'Enterprise AI transformation consulting',
    url: '#contact',
    source: 'ClawBiz',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['consulting', 'enterprise'],
  },
];

// Helper functions
export function getFeaturedResources() {
  return resources.filter(r => r.featured);
}

export function getResourcesByCategory(category: ResourceCategory) {
  return resources.filter(r => r.category === category);
}

export function getResourcesByLang(lang: 'zh' | 'en') {
  return resources.filter(r => r.lang === lang);
}
