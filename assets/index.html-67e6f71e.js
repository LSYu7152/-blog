import{_ as n,W as s,X as a,Y as e}from"./framework-d3c6dbde.js";const p={},t=e(`<h2 id="內部類別" tabindex="-1"><a class="header-anchor" href="#內部類別" aria-hidden="true">#</a> 內部類別</h2><p>Java中可以在類別中再定義類別，我們叫做 <strong>內部類別</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test<span class="token punctuation">.</span>InnerTest</span> innerTest <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">InnerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 需要外部類別實例才能創建內部類別實例</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述案例可以看到 Test類別中宣告了另一個類別 InnerTest；InnerTest即為Test的內部類別。</p><p>在創建內部類別的實體時我們 <strong>需要外部類別的實例才能創建內部類別實例</strong> ，因為 <strong>內部類別可以使用外部類別當前實例的屬性與方法</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> b<span class="token punctuation">;</span><span class="token comment">// 就算是private的屬性也可以被內部類別調用</span>

    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">// 通過外部類別名稱 + this 來調用外部類別屬性</span>
            b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">// 沒有同名屬性可省略</span>
            
            <span class="token comment">// 由上可知內部類別的實例必定會依附在一個外部類別的實例下</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 <strong>內部類別需要依附外部類別實體</strong> 的特性，使得我們實務上 <strong>通常並不會讓內部類別可以在其他類(如Main)之中被創建</strong> ，這樣將使得程式變得複雜且難以理解。</p><p><strong>可以利用存取修飾詞來調整外界的存取權限</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> b<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 更多時候依附外部類別的特性是為了在 外部類別實例中 創建 內部類別的實例</span>
        <span class="token class-name">InnerTest</span> innerTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InnerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 設定為private避免外界創建</span>
    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而 <strong>外部類別中能存取內部類別包含private修飾的所有屬性</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> b<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InnerTest</span> innerTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InnerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        innerTest<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">// 外部可以直接調用內部類別private屬性</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> c<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>內部類別通常只使用在當 內部類別 只為了服務此外部類別而存在時。</p></div><h2 id="靜態內部類別" tabindex="-1"><a class="header-anchor" href="#靜態內部類別" aria-hidden="true">#</a> 靜態內部類別</h2><p>雖然 內部類別只為了服務外部類別而存在，但有時我們需要在 <strong>尚未創建外部類別實體時獨立創建內部類別實體</strong> 。</p><p>此時 <strong>靜態內部類別不依賴外部類別實體</strong> 的特性就十分重要。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Test<span class="token punctuation">.</span>InnerTest</span> innerTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test<span class="token punctuation">.</span>InnerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 無需依賴外部類別實體便可以被創建</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因為 靜態內部類別不依賴外部類別實體，因此在靜態內部類之中就 <strong>無法使用外部類別.this來調用屬性(因為不會有外部實體)</strong> 。</p><p>當然外部類別之中還是能存取內部類別包含private修飾的所有屬性。</p><p>靜態內部類別使用起來基本與一般類別無異，但它宣告於另一個類別之中，利用這個特性我們可以更好的歸類跟處理多個類別。</p><p>關於靜態內部類別的使用，請參考 <a href="">Builder Pattern</a> 。</p><h2 id="補充-區域內部類別" tabindex="-1"><a class="header-anchor" href="#補充-區域內部類別" aria-hidden="true">#</a> 補充: 區域內部類別</h2><p>區域內部類別又稱作 方法內部類別 ，因為它只能於一個方法中作用，因此實用性非常低。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token comment">// 外部類別中的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 方法中宣告類別</span>
        <span class="token keyword">class</span> <span class="token class-name">InnerTest</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">innerMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 創建類別實體</span>
        <span class="token class-name">InnerTest</span> innerTest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InnerTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        innerTest<span class="token punctuation">.</span><span class="token function">innerMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","index.html.vue"]]);export{d as default};
