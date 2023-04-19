import{_ as e,W as t,X as p,$ as o,a0 as n,Z as c,a1 as i,Y as s,D as l}from"./framework-d3c6dbde.js";const u={},d=s(`<h2 id="繼承介紹與使用情境" tabindex="-1"><a class="header-anchor" href="#繼承介紹與使用情境" aria-hidden="true">#</a> 繼承介紹與使用情境</h2><p>假設今天有一個程式要使用到兩個類別，分別是 圓形 與 長方形，此時我們可能會如下定義。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> radius<span class="token punctuation">;</span><span class="token comment">// 半徑</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的x位置</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> radius<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> radius <span class="token operator">*</span> radius <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> radius <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的x位置</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    	<span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">+</span> height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上兩個類別通過觀察可以發現，取得面積與周長是重複的，圖形的座標位置也是重複的。</p><p>因此我們可以通過繼承來將重複的部分抽取出來。</p><p>父類別會先定義好一些屬性與一些方法，而子類別則針對他的需要再去做修改與擴充，也因此我們可以說 <strong>子類別是父類別的延伸(extend)</strong> ；因此 <strong>子類別會包含父類別中所有的屬性與方法</strong> 。</p><p>我們可以說父類別與子類別之間包含了 <strong>『is a』</strong> 關係，也就是 <strong>子類別 is a 父類別</strong> 。</p><p>舉例來說: Rectangle is a Shape. Circle is a Shape. 但 Shape is a Circle並不成立</p><h3 id="繼承語法" tabindex="-1"><a class="header-anchor" href="#繼承語法" aria-hidden="true">#</a> 繼承語法</h3><p>在撰寫繼承時，我們要先定義一個父類別；以上方程式碼為例，我們先定義一個類別名為形狀</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token comment">// 我們將屬性改為protected 讓子類別可以存取該屬性</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的x位置</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的y位置</span>
    
    <span class="token comment">// 形狀都需要有取面積的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 形狀都需要有取周長的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),k=s(`<p>接著我們利用 <strong>extends</strong> 關鍵字來實作繼承</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> 子類別 <span class="token keyword">extends</span> 父類別 <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// ..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    <span class="token comment">// 已經包含了 形狀中 坐標繫上的x位置</span>
    <span class="token comment">// 已經包含了 形狀中 坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    	<span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 擁有父類別中的xPoint</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 擁有父類別中的yPoint</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getArea方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getPerimeter方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">+</span> height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> radius<span class="token punctuation">;</span><span class="token comment">// 半徑</span>
    <span class="token comment">// 已經包含了 形狀中 坐標繫上的x位置</span>
    <span class="token comment">// 已經包含了 形狀中 坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> radius<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getArea方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> radius <span class="token operator">*</span> radius <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getPerimeter方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> radius <span class="token operator">*</span> <span class="token constant">PI</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="繼承與建構子" tabindex="-1"><a class="header-anchor" href="#繼承與建構子" aria-hidden="true">#</a> 繼承與建構子</h3><p>在上述的案例中，我們可以發現xPoint與yPoint是一定需要在創建時就給與的屬性，而我們在子類別的建構子中添加了這兩個屬性的賦值，但這樣我們並不能確保每一個子類別都有正確的添加這兩個屬性的初始化；因此初始化必須在父類別之中便被確定才能保證子類別都會初始化這兩個屬性。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token comment">// 我們將屬性改為protected 讓子類別可以存取該屬性</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的x位置</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 形狀都需要有取面積的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 形狀都需要有取周長的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在父類別中添加建構子後，類別中原先隱含的空建構子就不存在了；而 <strong>子類別中的建構子一定要呼叫父類別的任一建構子</strong> ，因此我們可以就能限制子類別必須要對這兩個屬性做初始化 詳見 <a href="#%E5%AD%90%E9%A1%9E%E5%88%A5%E7%9A%84%E5%BB%BA%E6%A7%8B%E5%AD%90">子類別的建構子</a>。</p><p>當我們需要呼叫子類別的建構子時，我們使用 this(參數)</p><p>而我們需要呼叫父類別的建構子時，則會使用 super(參數)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 延續上方案例</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">super</span><span class="token punctuation">(</span>xPoint<span class="token punctuation">,</span> yPoint<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 將xPoint與yPoint傳遞給父類別建構子進行初始化</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getArea方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> width <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 通過Override修改父類別中的getPerimeter方法的行為</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">+</span> height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子類別的建構子" tabindex="-1"><a class="header-anchor" href="#子類別的建構子" aria-hidden="true">#</a> 子類別的建構子</h4><p>在Java中，一個類別的建構子如果不存在會有一個預設的 空建構子(沒有參數與內容)。</p><p>而每一個類別的建構子中，其實在第一行也都會預設添加上父類別的建構子呼叫；目的是為了確保子類別的初始化在進行時，他其中包含的父類別的所有屬性與方法都已經被正確的初始化完成。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有一個預設的建構子 public Base(){}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
    
    <span class="token comment">// 建構子中會有一個預設的呼叫父類別 &quot;無參數建構子&quot; 的程式</span>
    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    	<span class="token comment">// super();</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
    <span class="token comment">// ..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>當父類別中 <strong>不包含無參數的建構子</strong> 時，子類別就必須要在建構子中的第一行呼叫父類別的任一建構子， <strong>並且子類別也不會自動創建預設的空建構子</strong> ，因為預設的空建構子中也是呼叫父類別的無參數建構子。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">super</span><span class="token punctuation">(</span>xPoint<span class="token punctuation">,</span> yPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// super必須在第一行</span>
        <span class="token comment">// 因為Shape中沒有無參數建構子，一定需要創建子類別建構子並呼叫父類別建構子</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
    <span class="token comment">// ..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object類別" tabindex="-1"><a class="header-anchor" href="#object類別" aria-hidden="true">#</a> Object類別</h3><p>Java中 <strong>所有的類別都繼承了Object類</strong> 。只要 <strong>沒有加上 extends 語法的類別，就預設會繼承至Object</strong> ；也因此，無論你繼承至哪一個類別，追根究底都會包含Object類別。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token comment">// extends Object</span>
    <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// super(); 預設</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// super(); 預設</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// super(); 預設</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// output</span>
<span class="token comment">// ------------------</span>
<span class="token comment">// A</span>
<span class="token comment">// B</span>
<span class="token comment">// C</span>
<span class="token comment">// ------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從上方案例可看出，物件的建構過程中，必定會從Object的建構子開始執行，接著依序從父類別開始執行；如上例則依序執行 Object的建構子-&gt;A的建構子-&gt;B的建構子-&gt;C的建構子。</p>`,20);function r(v,m){const a=l("RouterLink");return t(),p("div",null,[d,o("p",null,[n("在上述的類別中，我們將相同意義的屬性與方法抽出來作為父類別中的屬性與方法，而原先我們的屬性 "),c(a,{to:"/java/099de6/#java%E4%B8%AD%E7%9A%84%E5%AD%98%E5%8F%96%E4%BF%AE%E9%A3%BE%E8%A9%9E"},{default:i(()=>[n("存取修飾詞")]),_:1}),n(" 為private，因此子類別雖然會包含該屬性，但卻沒有該屬性的存取權；因此我們將其先改為protected來讓子類別得以存取。")]),k])}const y=e(u,[["render",r],["__file","index.html.vue"]]);export{y as default};
