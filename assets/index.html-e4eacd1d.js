import{_ as e,W as t,X as p,$ as s,a0 as n,Z as i,a1 as c,Y as o,D as l}from"./framework-d3c6dbde.js";const u={},d=s("h2",{id:"抽象類別",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#抽象類別","aria-hidden":"true"},"#"),n(" 抽象類別")],-1),r=s("h3",{id:"介紹",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介紹","aria-hidden":"true"},"#"),n(" 介紹")],-1),k=o(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的範例中可以看出，Shape類別雖然定義了不同形狀中都預計會用到的方法(getArea/getPerimeter)，但對於Shape自身這兩個方法並還不需要有實際的行為；也就是說 <strong>形狀必須要能取得面積/取得周長，但在還不確定具體形狀前無法知道如何取得面積/取得周長</strong> ，在這樣的情況下，形狀相較於 圓形、長方形 等具體形狀來說是抽象的。</p><p><strong>抽象類別</strong> 便是使用在這種情境下，抽象類別中包含了 <strong>屬性、方法、抽象方法</strong> ；你可以理解為，已經明確可以被定義的部分可以先建立屬性與方法，雖然知道目的但還不確定行為的具體內容的部分則定義為 <strong>抽象方法(未實現的方法)</strong> 。</p><h3 id="abstract-修飾字" tabindex="-1"><a class="header-anchor" href="#abstract-修飾字" aria-hidden="true">#</a> abstract 修飾字</h3><p>abstract修飾字的目的是將類別或方法標示為抽象類別/抽象方法。</p><ul><li>被abstract修飾的類別即抽象類別</li><li>被abstract修飾的方法即抽象方法</li><li>abstract不能修飾變數</li></ul><h3 id="使用範例" tabindex="-1"><a class="header-anchor" href="#使用範例" aria-hidden="true">#</a> 使用範例</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">{</span><span class="token comment">// 類別必須加上abstract修飾詞</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的x位置</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">;</span><span class="token comment">// 位於坐標繫上的y位置</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Shape</span><span class="token punctuation">(</span><span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>xPoint <span class="token operator">=</span> xPoint<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yPoint <span class="token operator">=</span> yPoint<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 形狀都需要有取面積的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 抽象方法必須加上abstract修飾詞</span>
    
    <span class="token comment">// 形狀都需要有取周長的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 抽象方法加上abstract修飾詞</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因為抽象類別中含有未實現的方法，因此 <strong>抽象類別不能使用new來創建實體</strong> ，必須等待子類別實現了未完成的方法後再以創建子類別實體的方式使用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>xPoint<span class="token punctuation">,</span> yPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> radius<span class="token punctuation">;</span><span class="token comment">// 半徑</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> r<span class="token punctuation">,</span> <span class="token keyword">int</span> xPoint<span class="token punctuation">,</span> <span class="token keyword">int</span> yPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>xPoint<span class="token punctuation">,</span> yPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token number">3.14f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPerimeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token number">3.14f</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根據以上範例我們可以總結出以下結論</p><ul><li>類別中有任何一個方法沒有實現，則該方法需要宣告為抽象方法，且此類別必須為抽象類別</li><li>如果父類別為抽象類別，則抽象方法需要被子類別Override</li><li>如果子類別沒有實現 <strong>所有</strong> 父類別中的抽象方法，則子類別必須也宣告為抽象類別</li><li>抽象方法不能使用 static、final、private修飾字 (無法被覆寫)</li><li>抽象方法的宣告不能包含實現(包含大括號與大括號中的內容)</li><li>抽象類別不能使用new來創建出物件實例</li><li>抽象類別中可以不包含抽象方法，但依然不能創建實例(目的是強迫繼承該類別)</li></ul><h2 id="介面" tabindex="-1"><a class="header-anchor" href="#介面" aria-hidden="true">#</a> 介面</h2><p>如果說繼承是找出類別之間的共通點，那我們可能會碰到這種情況：</p><p>手機是一種相機，手機是一種音樂撥放器，手機是一種電話</p><p>這種情況受限於 <strong>Java只能單一繼承</strong> 無法通過多重繼承來達到同時符合三者，此時我們便需要介面來 <strong>達到類似多重繼承的效果</strong> 。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Java 只能單一繼承，但可以實現多個介面</p></div><p>但介面有更多限制，假設有多重繼承，那可能造成A類別繼承的多個類別有同名方法，且實現不同</p><div class="language-pseudocode line-numbers-mode" data-ext="pseudocode"><pre class="language-pseudocode"><code># 以下是假想情況
B 類別{
	getName(){
		印出B
	}
}
C 類別{
	getName(){
		印出C
	}
}

A 繼承 B, C =&gt; getName會執行什麼?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>為瞭解決這個問題，介面中 <strong>所有的方法都會強制加上public abstract修飾</strong> ；可以理解為介面中不能有任何被實現的方法(但可以有常數)。</p><div class="language-pseudocode line-numbers-mode" data-ext="pseudocode"><pre class="language-pseudocode"><code># 以下是假想情況(如果介面中不能有任何已實現方法)
B 介面{
	getName();
}
C 介面{
	getName();
}

A 繼承 B, C =&gt; getName一定要被A Override，且覆寫只會有一種行為(位於A)，因此不會有多種行為混淆問題
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用範例-1" tabindex="-1"><a class="header-anchor" href="#使用範例-1" aria-hidden="true">#</a> 使用範例</h3><div class="language-pseudocode line-numbers-mode" data-ext="pseudocode"><pre class="language-pseudocode"><code>// 介面宣告
&lt;存取修飾詞&gt; interface &lt;名稱&gt; {
	// ...
	// ..
}
// 類別實現介面
&lt;存取修飾詞&gt; &lt;修飾詞&gt; class &lt;類別名稱&gt; [extends &lt;父類別名稱&gt;] [implements &lt;介面1&gt;, &lt;介面2&gt; ...] {
	// ...
	// ..
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Test1Interface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Test2Interface</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">implements</span> <span class="token class-name">Test1Interface</span><span class="token punctuation">,</span> <span class="token class-name">Test2Interface</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;test1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;test2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test1Interface</span> test1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test2Interface</span> test2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>新版Java針對介面有提供其餘新的用法與內容，但基本不影響多數開發情況，有興趣可以另行搜尋瞭解</p></div><p>根據以上範例我們可以總結出以下結論</p><ul><li>介面中只能宣告沒有實作的方法以及常數</li><li>一個類別可以實現多個介面</li><li>介面可以作為變數被宣告</li></ul>`,27);function v(m,b){const a=l("RouterLink");return t(),p("div",null,[d,r,s("p",null,[n("在介紹抽象類別前先回顧"),i(a,{to:"/java/2e9a44/#%E7%B9%BC%E6%89%BF%E8%88%87%E5%BB%BA%E6%A7%8B%E5%AD%90"},{default:c(()=>[n("繼承")]),_:1}),n("中的範例")]),k])}const w=e(u,[["render",v],["__file","index.html.vue"]]);export{w as default};
