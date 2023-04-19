import{_ as n,W as s,X as a,Y as e}from"./framework-d3c6dbde.js";const t={},p=e(`<h2 id="什麼是建造者模式" tabindex="-1"><a class="header-anchor" href="#什麼是建造者模式" aria-hidden="true">#</a> 什麼是建造者模式</h2><p>如果今天我們需要建造一個類別為學生</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> seat<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> seat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seat <span class="token operator">=</span> seat<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後我們如果要再加上多個不同屬性，假設為三種不同科目的成績，則學生的類別會變成</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> seat<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> scoreEng<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> scoreMath<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> scoreChinese<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> seat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seat <span class="token operator">=</span> seat<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此時我們的建構子就會十分難設計了；因為 <strong>有多種可能要在創建時帶入，也可能不需要帶入的屬性</strong> 。而 <strong>這些屬性的型態又相同</strong> 。</p><p>在這種情況下我們就算想利用建構子多載來達成多種不同的建構方式也十分困難。並且利用多載來處理的話是難以面對未來更多屬性擴充的可能性的。對於這一類的情況我們就會使用 <strong>建造者模式(Builder Pattern)</strong> 來處理。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>建造者模式在設計中時常利用 鏈式調用 的結構讓我們在使用上更為方便俐落。</p></div><h2 id="實現-builder" tabindex="-1"><a class="header-anchor" href="#實現-builder" aria-hidden="true">#</a> 實現 Builder</h2><p>利用上方的學生案例我們可以來創建一個與之相對的Builder。因為Builder通常只為了要創建的類別所服務，並且也不需要依賴該類別的實體(詳見 <a href="/java/bdd8ce">內部類別</a>)，所以多數時候我們會使用靜態內部類別的方式來設計。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token comment">// 將建構子設定為private來強迫外界只能使用Builder來創建</span>
    <span class="token keyword">private</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> seat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>seat <span class="token operator">=</span> seat<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
        <span class="token comment">// Builder中也會有一份相同的屬性用於創建</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> seat<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> scoreEng<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> scoreMath<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> scoreChinese<span class="token punctuation">;</span>
        
        <span class="token keyword">public</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> seat<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 因為name跟seat不管哪一個Student來說都是必備的屬性</span>
            <span class="token comment">// 因此我們也將他設計於Builder的建構子中</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>seat <span class="token operator">=</span> seat<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setScoreEng</span><span class="token punctuation">(</span><span class="token keyword">int</span> score<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>scoreEng <span class="token operator">=</span> score<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">// 利用回傳自己來達成鏈式調用的效果</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setScoreChinese</span><span class="token punctuation">(</span><span class="token keyword">int</span> scoreChinese<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>scoreChinese <span class="token operator">=</span> scoreChinese<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setScoreMath</span><span class="token punctuation">(</span><span class="token keyword">int</span> scoreMath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>scoreMath <span class="token operator">=</span> scoreMath<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token keyword">public</span> <span class="token class-name">Student</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 最後使用build方法我們就能得到Student的實體</span>
            <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> seat<span class="token punctuation">)</span><span class="token punctuation">;</span>
            student<span class="token punctuation">.</span>scoreEng <span class="token operator">=</span> scoreEng<span class="token punctuation">;</span><span class="token comment">// 此處只是簡易的示範，實際上用到參考資料型態時可能要考量空值問題</span>
            student<span class="token punctuation">.</span>scoreChinese <span class="token operator">=</span> scoreChinese<span class="token punctuation">;</span><span class="token comment">// 直接assign也並非最理想的做法</span>
            student<span class="token punctuation">.</span>scoreMath <span class="token operator">=</span> scoreMath<span class="token punctuation">;</span>
            
            <span class="token keyword">return</span> student<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成Builder類別後我們來實際操作：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Student<span class="token punctuation">.</span>Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token string">&quot;Test Student&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Student</span> student <span class="token operator">=</span> builder
                            <span class="token punctuation">.</span><span class="token function">setScoreEng</span><span class="token punctuation">(</span><span class="token number">54</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">setScoreChinese</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上方的使用方法可以看出builder在設定各個參數時的方法中間是沒有分行的，這種調用方式即為鏈式調用；在設定完所有我們需要設定的屬性後我們便可以簡單的利用呼叫build()來得到Student的實體。</p><p>Builder Pattern的好處在只有些許參數時是很難感受到的，當未來有碰到參數眾多且多為可選屬性的情況時，就會非常適合使用Builder Pattern。</p><p>而Builder的缺點就是要多建立一個Class，且未來如果要創建的類別有任何屬性更動時，Builder也都會需要做相對應的更動，在維護上會較為麻煩。</p>`,16),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","index.html.vue"]]);export{d as default};
