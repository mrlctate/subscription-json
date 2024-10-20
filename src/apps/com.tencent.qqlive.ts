import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      quickFind: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: ['TextView[text*="跳过"][text.length<=10]'],
          snapshotUrls: ['https://i.gkd.li/i/17409509'],
        },
      ],
    },
  ],
});
