import{_ as n,W as s,X as a,Y as p}from"./framework-d3c6dbde.js";const e={},t=p(`<h2 id="遊戲中的延遲機制" tabindex="-1"><a class="header-anchor" href="#遊戲中的延遲機制" aria-hidden="true">#</a> 遊戲中的延遲機制</h2><p>在遊戲中我們時常會需要進行動畫的播放，或是一些物件的移動等等；但在顯示時我們並不一定都會需要用到每秒60幀的細緻度，尤其是2D的平面遊戲中，像素的是有限的情況下我們可能在部分的動畫播放時只需要每秒10幀左右。因此我們要建立一個能針對各自情況控制幀數的類別來進行這一類延遲的處理。</p><h3 id="delay類別" tabindex="-1"><a class="header-anchor" href="#delay類別" aria-hidden="true">#</a> Delay類別</h3><p>首先我們創建一個類別，這個類別類似於Timer，會進行計時並在一定時間的延遲後才會觸發我們預計要執行的內容</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Delay</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span><span class="token comment">// 用來判斷延遲已經經過的幀數的計時</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> countLimit<span class="token punctuation">;</span><span class="token comment">// 紀錄所需要延遲的幀數(ex. 10幀)</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> isPause<span class="token punctuation">;</span><span class="token comment">// 設定是否要進行計算/或是暫停處理該延遲事件</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> isLoop<span class="token punctuation">;</span><span class="token comment">// 是否為週期性的延遲事件，如果這個事件會反覆的延遲並執行就會設定為true</span>

    <span class="token keyword">public</span> <span class="token class-name">Delay</span><span class="token punctuation">(</span><span class="token keyword">int</span> countLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>countLimit <span class="token operator">=</span> countLimit<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPause <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      	<span class="token keyword">this</span><span class="token punctuation">.</span>isLoop <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了以上的基本要素後，我們便依照基本要素進行方法的設計</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Delay</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">// 為了方便操作，我們避免setIsPause這種難懂的設計方式，改由無參數的方法直接設定</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      	<span class="token comment">// 一次性執行</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isLoop <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 一次性執行所以isLoop設定為false</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPause <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 將暫停取消 開始計時</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 反覆執行</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isLoop <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">// 反覆執行因此設定為true</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPause <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 將暫停取消 開始計時</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPause <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">// 暫停</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 如果是停止的話我們需要順便重置count</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isPause <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供了基本的操作方法後，我們再加入可以簡易判斷狀態的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Delay</span> <span class="token punctuation">{</span>
  	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isStop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isPause<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isPause<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPlaying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isPause<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後我們要加入整個Delay類別的核心方法，計算延遲時間的方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 這個方法需要反覆在更新中被呼叫，並通過被呼叫的次數來進行延遲的判斷</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token comment">// 如果目前是暫停的狀態 那直接回傳false =&gt; 即不會計算也不會觸發延遲後要執行的事件</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isPause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  	<span class="token punctuation">}</span>
  
  	<span class="token comment">// 如果目前已經計算到需要計時的範圍，則回傳true通知外面可以執行事件</span>
  	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>countLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isLoop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          	<span class="token comment">// 如果是週期性執行的情況就重新將count歸零繼續計算</span>
      			<span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 如果是一次性執行的情況我們呼叫stop()停止這個事件的進行</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
    		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// 沒有算到要觸發 同時也 不是暫停的情況 計算次數增加</span>
  	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span><span class="token comment">// 還沒觸發</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">FRAME_PER_SECOND</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">UPDATE_PER_SECOND</span> <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JFrame</span> jFrame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span><span class="token string">&quot;Game&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setResizable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">setDefaultCloseOperation</span><span class="token punctuation">(</span><span class="token class-name">JFrame</span><span class="token punctuation">.</span><span class="token constant">EXIT_ON_CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">GameKernel</span> gameKernel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GameKernel</span><span class="token punctuation">(</span><span class="token constant">FRAME_PER_SECOND</span><span class="token punctuation">,</span> <span class="token constant">UPDATE_PER_SECOND</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MouseAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">mouseMoved</span><span class="token punctuation">(</span><span class="token class-name">MouseEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jFrame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>gameKernel<span class="token punctuation">)</span><span class="token punctuation">;</span>

        jFrame<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        gameKernel<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Game</span> <span class="token keyword">implements</span> <span class="token class-name">GameKernel<span class="token punctuation">.</span>GameInterface</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">Delay</span> delay<span class="token punctuation">;</span><span class="token comment">// 我們在遊戲的類別中加入Delay進行測試</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span><span class="token comment">// 為了方便測試我們用一個變數來計算經過的幀數</span>

        <span class="token keyword">public</span> <span class="token class-name">Game</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>delay <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Delay</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 設定為每十幀會觸發一次</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>delay<span class="token punctuation">.</span><span class="token function">loop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 週期性觸發</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 不斷印出經過的幀數數</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>delay<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              	<span class="token comment">// 計算delay直到延遲到需求秒數並觸發事件</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;trig&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">paint</span><span class="token punctuation">(</span><span class="token class-name">Graphics</span> g<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// output</span>
<span class="token number">0</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token number">10</span>
trig
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
<span class="token number">14</span>
<span class="token number">15</span>
<span class="token number">16</span>
<span class="token number">17</span>
<span class="token number">18</span>
<span class="token number">19</span>
<span class="token number">20</span>
<span class="token number">21</span>
trig
<span class="token comment">// ------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function c(l,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","index.html.vue"]]);export{k as default};
