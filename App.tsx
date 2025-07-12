import './App.css';
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  // 控制弹窗显示
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // 保存注册信息
  const [registeredUser, setRegisteredUser] = useState<{ username: string; password: string } | null>(null);

  // 登录状态
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');

  // 登录弹窗输入状态
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // 注册弹窗输入状态
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = () => {
  if (!registeredUser) {
    setLoginError('unregistered'); // 自定义标志，表示未注册
    return;
  }

  if (
    loginUsername === registeredUser.username &&
    loginPassword === registeredUser.password
  ) {
    setIsLoggedIn(true);
    setLoggedInUsername(loginUsername);
    setShowLogin(false);
    setLoginError('');
    setLoginUsername('');
    setLoginPassword('');
  } else {
    setLoginError('用户名或密码错误');
  }
};


  // 注册处理
  const handleRegister = () => {
  if (!registerUsername || !registerPassword) {
    alert('用户名和密码不能为空');
    return;
  }

  // 保存注册信息
  const newUser = { username: registerUsername, password: registerPassword };
  setRegisteredUser(newUser);

  // 自动登录
  setIsLoggedIn(true);
  setLoggedInUsername(registerUsername);

  // 关闭注册弹窗
  setShowRegister(false);

  // 清空输入
  setRegisterUsername('');
  setRegisterPassword('');
};
//\

  // 登出
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUsername('');
  };

  return (
    <div className="container">
      {/* Header */}
     <header className="header">
  <div className="header-inner">
    <div className="header-left">
      <h1>leno自由求职</h1>
    </div>

    <div className="header-center">
      <nav>
        <a href="#hero">首页</a>
        <a href="#categories">职位</a>
        <a href="#workflow">自由职业者</a>
        <a href="#footer">关于我们</a>
      </nav>
    </div>

    <div className="header-right">
      {isLoggedIn ? (
        <>
          <span className="user-name">👤 {loggedInUsername}</span>
          <button className="secondary-btn" onClick={handleLogout} style={{ marginLeft: 12 }}>
            退出
          </button>
        </>
      ) : (
        <>
          <button className="auth-btn" onClick={() => setShowLogin(true)}>
            登录
          </button>
          <button className="auth-btn" onClick={() => setShowRegister(true)}>
            注册
          </button>
        </>
      )}
    </div>
  </div>
</header>


      {/* Hero Section */}
      <section className="hero" id="hero">
        <h2>连接顶级自由职业者</h2>
        <p>让您的项目更快、更好地完成。</p>
        <button className="primary-btn">立即发布职位</button>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-bar">
          <div className="stat-item">
            80万
            <br />
            <span>全球雇主</span>
          </div>
          <div className="stat-item">
            100万
            <br />
            <span>已付发票</span>
          </div>
          <div className="stat-item">
            2.5亿美元
            <br />
            <span>支付给自由职业者</span>
          </div>
          <div className="stat-item">
            99%
            <br />
            <span>客户满意度</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <h2>寻找顶级自由职业者</h2>
        <div className="category-grid">
          {[
            { title: '编程与开发', count: '289,123', icon: '💻' },
            { title: '写作与翻译', count: '213,512', icon: '📄' },
            { title: '设计与创意', count: '197,844', icon: '🎨' },
            { title: '销售与市场', count: '165,020', icon: '📢' },
            { title: '行政支持', count: '122,765', icon: '📋' },
            { title: '教育与培训', count: '89,110', icon: '🎓' },
          ].map((item, index) => (
            <div className="category-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.count}名自由职业者</p>
            </div>
          ))}
        </div>
        <div className="view-all">
          <button className="primary-btn">查看所有技能</button>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow" id="workflow">
        <h2>在 Leno 上轻松完成工作</h2>
        <div className="workflow-steps">
          {[
            { title: '发布职位', desc: '创建完整的竞标职位或直接分配任务。', icon: '📝' },
            { title: '聘请自由职业者', desc: '比较资料，查看评分和经验。', icon: '👤' },
            { title: '完成工作', desc: '协作、反馈、上传并完成项目。', icon: '✅' },
            { title: '安全付款', desc: 'SafePay 保障和多种支付方式。', icon: '💳' },
          ].map((item, index) => (
            <div className="step" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="primary-btn">了解 leno 的工作流程</button>
      </section>

      {/* Work Style Section */}
      <section className="work-style">
        <h2>按你的方式工作</h2>
        <div className="style-content">
          <div className="style-image">
            <img src="/laptop.png" alt="workflow laptop" />
          </div>
          <div className="style-options">
            <p>从四种付款条件中选择并创建协议：</p>
            <ul>
              <li>✅ 走价</li>
              <li>✅ 每小时</li>
              <li>✅ 任务型</li>
              <li>✅ 分期付款</li>
            </ul>
            <button className="primary-btn">了解协议</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>平台信息</h4>
            <ul>
              <li>
                <a href="#">关于我们</a>
              </li>
              <li>
                <a href="#">新闻与媒体</a>
              </li>
              <li>
                <a href="#">联系我们</a>
              </li>
              <li>
                <a href="#">帮助中心</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>服务条款</h4>
            <ul>
              <li>
                <a href="#">用户协议</a>
              </li>
              <li>
                <a href="#">隐私政策</a>
              </li>
              <li>
                <a href="#">Cookie 政策</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>关注我们</h4>
            <ul>
              <li>
                <a href="#">微博</a>
              </li>
              <li>
                <a href="#">知乎</a>
              </li>
              <li>
                <a href="#">Bilibili</a>
              </li>
              <li>
                <a href="#">微信公众号</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Leno网站演示 · 保留所有权利</div>
      </footer>

      {/* 登录弹窗 */}
      {showLogin && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="loginTitle">
          <div className="modal">
            <h2 id="loginTitle">登录</h2>
            <input
              type="text"
              placeholder="用户名"
              value={loginUsername}
              onChange={e => setLoginUsername(e.target.value)}
              autoFocus
            />
            <input
              type="password"
              placeholder="密码"
              value={loginPassword}
              onChange={e => setLoginPassword(e.target.value)}
            />
            {loginError === 'unregistered' ? (
              <div className="error-text">
              你还没有注册，<button
              style={{ color: '#0b64d4', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => {
                setShowLogin(false);
                setLoginError('');
                setShowRegister(true); // ✅ 跳转到注册弹窗
              }}
              >
              请先注册
              </button>
            </div>
            ) : loginError ? (
              <p className="error-text">{loginError}</p>
            ) : null}

            <div className="modal-actions">
              <button className="primary-btn" onClick={handleLogin}>
                登录
              </button>
              <button className="secondary-btn" onClick={() => setShowLogin(false)}>
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 注册弹窗 */}
      {showRegister && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="registerTitle">
          <div className="modal">
            <h2 id="registerTitle">注册</h2>
            <input
              type="text"
              placeholder="用户名"
              value={registerUsername}
              onChange={e => setRegisterUsername(e.target.value)}
              autoFocus
            />
            <input
              type="password"
              placeholder="密码"
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)}
            />
            <div className="modal-actions">
              <button className="primary-btn" onClick={handleRegister}>
                注册
              </button>
              <button className="secondary-btn" onClick={() => setShowRegister(false)}>
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
